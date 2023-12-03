
# Did Key
KEY=MgCZjVlRh+pnDLq/69/u7DtbJBq+BHefvQ+3DNFOHxOruMu0BHXRNDVnPIOX9YgjoMmcpPj6K5dIX5z32ObSEIdffPg4=

# Run the command and store the output in a variable
output=$(w3 delegation create did:key:z6MkgSEj4AXcHQWBfPXe2AcZWyxtR2Qb2yL77nSz8NBJKfkR)

# Encode the output in Base64
encoded_output=$(echo -n "$output" | base64)

# Store the Base64-encoded output in the PROOF environment variable
export PROOF="$encoded_output"