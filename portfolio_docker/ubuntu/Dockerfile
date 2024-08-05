FROM ubuntu:22.04

RUN apt-get update
RUN apt-get install -y sudo locales apt-utils tzdata init systemd
RUN locale-gen jp_JP.UTF-8

ENV TIMEZONE=Asia/Tokyo
RUN ln -snf /usr/share/zoneinfo/$TIMEZONE /etc/localtime \
    && echo $TIMEZONE > /etc/timezone

ENV LANG jp_JP.UTF-8
ENV LANGUAGE jp_JP:jp
ENV LC_ALL jp_JP.UTF-8

ENV USER_NAME kyamasaki
ENV USER_PASSWORD kyamasaki

# RUN adduser kyamasaki \
#     && mkdir /home/kyamasaki/.ssh/ \
#     && mkdir /root/.ssh
# RUN echo "${USER_NAME}:${USER_PASSWORD}" | chpasswd \
#     && echo "$USER_NAME ALL={ALL} NOPASSWD:ALL" >> /etc/sudoers \
#     && sed -i "s/^.*requiretty/#Defaults requiretty/" /etc/sudoers

RUN yes | unminimize

RUN apt-get install -y git cron gcc g++ openssh-server iproute2 net-tools openssl build-essential devscripts dh-make \
    autoconf bison git vim expect ansible nkf wget jq \
    man-db tree whois rsyslog

COPY .vimrc /root/
COPY .vimrc /home/kyamasaki/

# RUN chmod -R 700 /home/kyamasaki/.ssh/ \
#     && chmod -R 700 /home/root/.ssh/ \
#     && chmod -R kyamasaki:kyamasaki /home/kyamasaki/.ssh/

# COPY ssh/id_rsa /root/.ssh/
# COPY ssh/authorized_keys /root/.ssh/
# COPY ssh/config /root/.ssh/

RUN /usr/bin/systemctl enable ssh.service

RUN /usr/bin/systemctl disable getty@tty1.service \
    && /usr/bin/systemctl disable getty.target \
    && /usr/bin/systemctl disable systemd-udevd.service