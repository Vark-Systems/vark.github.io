#!/bin/bash
# Simple script to open the landing page in your default browser

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Open the index.html file in the default browser
open "$SCRIPT_DIR/index.html"

echo "Opening landing page in your default browser..."
