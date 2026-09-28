#!/bin/sh

IFS= read -r request

case "$request" in
  GET\ /styles.css*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/css\r\nConnection: close\r\n\r\n'
    cat styles.css
    ;;
  GET\ /lab2/styles.css*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: text/css\r\nConnection: close\r\n\r\n'
    cat lab2/styles.css
    ;;
  GET\ /images/diw.svg*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: image/svg+xml\r\nConnection: close\r\n\r\n'
    cat images/diw.svg
    ;;
  GET\ /lab2/images/sintra-1.jpg*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: image/jpeg\r\nConnection: close\r\n\r\n'
    cat lab2/images/sintra-1.jpg
    ;;
  GET\ /lab2/images/sintra-2.jpg*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: image/jpeg\r\nConnection: close\r\n\r\n'
    cat lab2/images/sintra-2.jpg
    ;;
  GET\ /lab2/images/sintra-3.jpg*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: image/jpeg\r\nConnection: close\r\n\r\n'
    cat lab2/images/sintra-3.jpg
    ;;
  GET\ /lab2/images/sintra-4.jpg*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: image/jpeg\r\nConnection: close\r\n\r\n'
    cat lab2/images/sintra-4.jpg
    ;;
  GET\ /lab2/images/sintra-5.jpg*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: image/jpeg\r\nConnection: close\r\n\r\n'
    cat lab2/images/sintra-5.jpg
    ;;
  GET\ /lab2/images/sintra-6.jpg*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: image/jpeg\r\nConnection: close\r\n\r\n'
    cat lab2/images/sintra-6.jpg
    ;;
  GET\ /lab2/images/sintra-7.jpg*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: image/jpeg\r\nConnection: close\r\n\r\n'
    cat lab2/images/sintra-7.jpg
    ;;
  GET\ /lab2/images/sintra-8.jpg*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: image/jpeg\r\nConnection: close\r\n\r\n'
    cat lab2/images/sintra-8.jpg
    ;;
  GET\ /lab2/images/capa.jpg*)
    printf 'HTTP/1.1 200 OK\r\nContent-Type: image/jpeg\r\nConnection: close\r\n\r\n'
    cat lab2/images/capa.jpg
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
