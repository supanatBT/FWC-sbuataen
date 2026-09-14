if [ $# -eq 0 ]; then
    exit 0
fi
for arg in "$@"; do
    mkdir -p "ex$arg"
done
