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
  GET\ /lab1/index.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat lab1/index.html
    ;;
  GET\ /lab1/local.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat lab1/local.html
    ;;
  GET\ /lab1/multimedia.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat lab1/multimedia.html
    ;;
  GET\ /lab1/info.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat lab1/info.html
    ;;
  GET\ /lab2/index.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat lab2/index.html
    ;;
  GET\ /lab2/local.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat lab2/local.html
    ;;
  GET\ /lab2/multimedia.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat lab2/multimedia.html
    ;;
  GET\ /lab2/info.html*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat lab2/info.html
    ;;
  *)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nConnection: close\r\n\r\n'
    cat index.html
    ;;
esac
