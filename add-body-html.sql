-- Add body_html column for rich text editor output
-- Run this in Supabase SQL Editor before deploying the new admin/blog pages

alter table blog_posts add column if not exists body_html text;

-- Verify
select column_name, data_type
from information_schema.columns
where table_name = 'blog_posts'
order by ordinal_position;
