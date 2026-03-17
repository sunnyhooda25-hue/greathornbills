#!/bin/bash

echo "Backing up files..."
mkdir -p .backup-$(date +%Y%m%d)

# Find and replace .html in href links
find . -name "*.html" -type f -exec sed -i.bak 's/href="\([^"]*\)\.html"/href="\1"/g' {} \;

echo "Updated all internal links to remove .html"

# Clean up .bak files
find . -name "*.html.bak" -delete

echo "Backup created in .backup-* directory"
