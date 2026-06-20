#!/usr/bin/env python3
"""
Moves the downloaded marketplace files from ~/Downloads into their
correct locations inside your toptonmedia project.

Run this from your project root:
    python3 install_marketplace_files.py

It looks for these files in ~/Downloads (exact names as downloaded):
    01_schema.sql            -> not moved, this one you run in Supabase SQL editor
    payments.server.ts       -> src/lib/payments.server.ts
    shop-index.tsx           -> src/routes/shop/index.tsx
    shop-slug.tsx             -> src/routes/shop/$slug.tsx
    order-confirmation.tsx   -> src/routes/order/confirmation.tsx

Creates any missing folders. Backs up any existing file at the
destination before overwriting it.
"""
import shutil
from pathlib import Path

DOWNLOADS = Path.home() / "Downloads"
PROJECT_ROOT = Path.cwd()

# (filename in Downloads, destination path relative to project root)
FILES = [
    ("payments.server.ts", "src/lib/payments.server.ts"),
    ("shop-index.tsx", "src/routes/shop/index.tsx"),
    ("shop-slug.tsx", "src/routes/shop/$slug.tsx"),
    ("order-confirmation.tsx", "src/routes/order/confirmation.tsx"),
]

SQL_FILE = "01_schema.sql"


def main():
    print(f"Looking for files in: {DOWNLOADS}")
    print(f"Installing into project at: {PROJECT_ROOT}\n")

    moved = 0
    missing = []

    for source_name, dest_rel_path in FILES:
        source_path = DOWNLOADS / source_name
        dest_path = PROJECT_ROOT / dest_rel_path

        if not source_path.exists():
            missing.append(source_name)
            continue

        dest_path.parent.mkdir(parents=True, exist_ok=True)

        if dest_path.exists():
            backup_path = dest_path.with_suffix(dest_path.suffix + ".bak")
            shutil.copy2(dest_path, backup_path)
            print(f"Backed up existing file to: {backup_path}")

        shutil.copy2(source_path, dest_path)
        print(f"Installed: {dest_rel_path}")
        moved += 1

    print(f"\n{moved}/{len(FILES)} files installed.")

    if missing:
        print("\nCould not find these in ~/Downloads (check the exact filename or download them again):")
        for name in missing:
            print(f"  - {name}")

    sql_path = DOWNLOADS / SQL_FILE
    if sql_path.exists():
        print(f"\nNote: {SQL_FILE} was found but NOT copied into the project.")
        print("That file needs to be run manually in the Supabase SQL Editor, not placed in your codebase.")
    else:
        print(f"\nNote: {SQL_FILE} not found in Downloads. Remember to run it in Supabase SQL Editor separately.")

    if moved == len(FILES):
        print("\nNext steps:")
        print("  1. Add PAYSTACK_SECRET_KEY, STRIPE_SECRET_KEY, SUPABASE_SERVICE_ROLE_KEY, PUBLIC_SITE_URL to your .env")
        print("  2. npm install @supabase/supabase-js")
        print("  3. npx tsr generate")
        print("  4. npm run dev")


if __name__ == "__main__":
    main()
