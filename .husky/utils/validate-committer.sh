#!/bin/bash

# Get the current username
username=$(git config user.name)

# Get the current email
email=$(git config user.email)

# Define allowed usernames and emails
allowed_usernames=("dev" "foundation")
allowed_emails=("dev@usdv.money" "foundation@usdv.money")

# Check if the username is allowed
if [[ ! " ${allowed_usernames[@]} " =~ " ${username} " ]]; then
    echo "Error: Invalid username. Allowed usernames: ${allowed_usernames[@]}"
    exit 1
fi

# Check if the email is allowed
if [[ ! " ${allowed_emails[@]} " =~ " ${email} " ]]; then
    echo "Error: Invalid email. Allowed emails: ${allowed_emails[@]}"
    exit 1
fi

# If all checks pass, allow the commit
exit 0
