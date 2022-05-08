FROM klakegg/hugo:ubuntu-onbuild AS hugo


FROM nginx:stable-alpine
COPY --from=hugo /target /usr/share/nginx/html
RUN echo "real_ip_header X-Forwarded-For;" \
    "real_ip_recursive on;" \
    "set_real_ip_from 0.0.0.0/0;" > /etc/nginx/conf.d/ip.conf
#RUN sed -i '/index  index.html index.htm/c\        try_files $uri /index.html;' /etc/nginx/conf.d/default.conf
EXPOSE ${PORT} 
CMD ["nginx", "-g", "daemon off;"]
