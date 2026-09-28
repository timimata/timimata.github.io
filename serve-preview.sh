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
  GET\ /cidade/index.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat cidade/index.html
    ;;
  GET\ /cidade/local.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat cidade/local.html
    ;;
  GET\ /cidade/multimedia.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat cidade/multimedia.html
    ;;
  GET\ /cidade/info.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat cidade/info.html
    ;;
  *)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat index.html
    ;;
esac
