
ARG APP_IMAGE_FROM

FROM $APP_IMAGE_FROM

ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /opt/portfolio \
    && mkdir /opt/portfolio/web \
    && mkdir /opt/portfolio/static \
    && mkdir /opt/portfolio/media \
    && mkdir /opt/portfolio/import_files \
    && mkdir /opt/portfolio/logs \
    && mkdir /cache

WORKDIR /opt/portfolio/web

ARG APP_REQUIREMENT_FILE

COPY requirements/base.txt requirements/$APP_REQUIREMENT_FILE entrypoint.sh /cache/

RUN pip install -U pip \
    && pip install -r /cache/$APP_REQUIREMENT_FILE

ADD portfolio /opt/portfolio/web

RUN chmod +x /cache/entrypoint.sh