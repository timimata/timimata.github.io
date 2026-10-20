#!/bin/sh

IFS= read -r request
path=${request#GET }
path=${path%% *}
path=${path#/}
path=${path%%\?*}

[ -n "$path" ] || path=index.html
case "$path" in
  *..*)
    printf 'HTTP/1.1 403 Forbidden\r\nConnection: close\r\n\r\n'
    exit
    ;;
esac

if [ ! -f "$path" ]; then
  printf 'HTTP/1.1 404 Not Found\r\nConnection: close\r\n\r\n'
  exit
fi

case "$path" in
  *.html) type='text/html; charset=UTF-8' ;;
  *.css) type='text/css' ;;
  *.jpg|*.jpeg) type='image/jpeg' ;;
  *.png) type='image/png' ;;
  *.svg) type='image/svg+xml' ;;
  *) type='application/octet-stream' ;;
esac

printf 'HTTP/1.1 200 OK\r\nContent-Type: %s\r\nConnection: close\r\n\r\n' "$type"
cat "$path"
