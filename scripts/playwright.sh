#!/bin/bash

CMD=$1

# Check if CI environment variable is set to true
if [ "$CI" = "true" ]; then
	pnpm exec playwright install --with-deps chromium
	xvfb-run --auto-servernum -- $CMD
else
	# Run Playwright tests normally in non-CI environment
	($CMD)
fi
