#!/bin/sh

IFS= read -r request

case "$request" in
  GET\ /styles.css*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/css\r\nConnection: close\r\n\r\n'
    cat styles.css
    ;;
  GET\ /images/diw.svg*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: image/svg+xml\r\nConnection: close\r\n\r\n'
    cat images/diw.svg
    ;;
  *)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat index.html
    ;;
esac
