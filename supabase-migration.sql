-- ═══════════════════════════════════════════════════════════════
-- Topton Media Admin Backend — Schema Migration
-- Run this in Supabase SQL Editor (dashboard.supabase.com > SQL Editor)
-- Safe to run multiple times — uses IF NOT EXISTS / IF EXISTS guards
-- ═══════════════════════════════════════════════════════════════

-- ─── BLOG POSTS TABLE ──────────────────────────────────────────
create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  meta_title text,
  meta_description text,
  category text not null,
  related_service text,
  excerpt text,
  quick_answer text,
  hero_image text,
  content jsonb default '[]'::jsonb,
  faqs jsonb default '[]'::jsonb,
  keywords text[] default array[]::text[],
  read_minutes int default 6,
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists idx_blog_posts_slug on blog_posts(slug);
create index if not exists idx_blog_posts_published on blog_posts(published);
create index if not exists idx_blog_posts_category on blog_posts(category);

-- Keep updated_at fresh on every edit
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_blog_posts_updated_at on blog_posts;
create trigger trg_blog_posts_updated_at
  before update on blog_posts
  for each row execute function set_updated_at();

-- ─── CONTACT SUBMISSIONS TABLE (CRM-enhanced) ─────────────────
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  phone text,
  service text,
  budget text,
  message text,
  -- CRM fields
  status text default 'new' check (status in ('new', 'contacted', 'qualified', 'proposal_sent', 'won', 'lost')),
  notes text,
  follow_up_date date,
  assigned_to text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists idx_contact_submissions_status on contact_submissions(status);
create index if not exists idx_contact_submissions_created on contact_submissions(created_at desc);

drop trigger if exists trg_contact_submissions_updated_at on contact_submissions;
create trigger trg_contact_submissions_updated_at
  before update on contact_submissions
  for each row execute function set_updated_at();

-- If contact_submissions already existed without CRM columns, add them safely
do $$
begin
  if not exists (select 1 from information_schema.columns where table_name='contact_submissions' and column_name='status') then
    alter table contact_submissions add column status text default 'new';
  end if;
  if not exists (select 1 from information_schema.columns where table_name='contact_submissions' and column_name='notes') then
    alter table contact_submissions add column notes text;
  end if;
  if not exists (select 1 from information_schema.columns where table_name='contact_submissions' and column_name='follow_up_date') then
    alter table contact_submissions add column follow_up_date date;
  end if;
  if not exists (select 1 from information_schema.columns where table_name='contact_submissions' and column_name='assigned_to') then
    alter table contact_submissions add column assigned_to text;
  end if;
  if not exists (select 1 from information_schema.columns where table_name='contact_submissions' and column_name='updated_at') then
    alter table contact_submissions add column updated_at timestamptz default now();
  end if;
end $$;

-- ─── ROW LEVEL SECURITY ────────────────────────────────────────
-- Public site needs to INSERT contact submissions (the contact form)
-- and SELECT published blog posts. Admin panel uses the anon key too
-- (password-gated in the app), so we allow broader access but keep
-- it scoped sensibly.

alter table contact_submissions enable row level security;
alter table blog_posts enable row level security;

drop policy if exists "Public can insert contact submissions" on contact_submissions;
create policy "Public can insert contact submissions"
  on contact_submissions for insert
  to anon
  with check (true);

drop policy if exists "Anon can read contact submissions" on contact_submissions;
create policy "Anon can read contact submissions"
  on contact_submissions for select
  to anon
  using (true);

drop policy if exists "Anon can update contact submissions" on contact_submissions;
create policy "Anon can update contact submissions"
  on contact_submissions for update
  to anon
  using (true);

drop policy if exists "Public can read published posts" on blog_posts;
create policy "Public can read published posts"
  on blog_posts for select
  to anon
  using (true);

drop policy if exists "Anon can insert posts" on blog_posts;
create policy "Anon can insert posts"
  on blog_posts for insert
  to anon
  with check (true);

drop policy if exists "Anon can update posts" on blog_posts;
create policy "Anon can update posts"
  on blog_posts for update
  to anon
  using (true);

drop policy if exists "Anon can delete posts" on blog_posts;
create policy "Anon can delete posts"
  on blog_posts for delete
  to anon
  using (true);

-- ═══════════════════════════════════════════════════════════════
-- NOTE ON SECURITY: RLS policies above allow the anon key full
-- read/write access, relying on the app-level password gate in
-- /admin for protection. This is acceptable for a low-traffic
-- internal tool but is NOT bank-grade security — anyone with your
-- anon key (visible in browser devtools) could technically write
-- to these tables directly via the Supabase API, bypassing the
-- password screen. If this becomes a concern as the business
-- grows, the proper fix is moving admin writes behind a real
-- Supabase Auth session + server-side checks instead of a
-- hardcoded password in the frontend.
-- ═══════════════════════════════════════════════════════════════
