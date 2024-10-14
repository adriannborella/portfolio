# Use multi-stage builds
ARG APP_IMAGE_FROM

FROM $APP_IMAGE_FROM AS builder

ARG APP_REQUIREMENT_FILE

COPY requirements/base.txt requirements/$APP_REQUIREMENT_FILE /cache/

# Install dependencies in the build stage
RUN pip install --no-cache-dir -U pip \
    && pip install --no-cache-dir -r /cache/$APP_REQUIREMENT_FILE

# Production stage
FROM $APP_IMAGE_FROM

# Copy necessary files from the build stage
COPY --from=builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin

RUN mkdir /opt/portfolio \
    && mkdir /opt/portfolio/web \
    && mkdir /opt/portfolio/static \
    && mkdir /opt/portfolio/media \
    && mkdir /opt/portfolio/logs \
    && mkdir /cache

WORKDIR /opt/portfolio/web

COPY entrypoint.sh /cache/

ADD portfolio /opt/portfolio/web

RUN chmod +x /cache/entrypoint.sh

# Expose the port for the web service
EXPOSE 8000

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


# start the server
CMD ["sh", "-c", "gunicorn --bind 0.0.0.0:8000 src.wsgi:application"]