if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    echo "$@" | tr ' ' '\n' | head -n 3
fi
