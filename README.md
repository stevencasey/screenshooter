      __|   __|  _ \  __|  __|   \ |   __|  |  |   _ \   _ \ __ __| __|  _ \
    \__ \  (       /  _|   _|   .  | \__ \  __ |  (   | (   |   |   _|     /
    ____/ \___| _|_\ ___| ___| _|\_| ____/ _| _| \___/ \___/   _|  ___| _|_\

# Screenshooter

A little Sinatra/PhantomJS web service that, given a URL, takes a screenshot
and uploads it to S3.

We use this to create PNGs of SVGs served by our Rails apps and to make
up-to-date images of Raphael graphics for sharing on Facebook and Twitter.

## Dependencies

  * [Sinatra](http://www.sinatrarb.com/)
  * [ImageMagick](http://www.imagemagick.org/script/index.php)
  * [PhantomJS](http://phantomjs.org/)

## Installation (Ubuntu)

    apt-get install imagemagick
    gem install sinatra aws-s3
    install phantomjs (http://code.google.com/p/phantomjs/wiki/Installation)

## Getting Started

Create s3.yml from s3.sample.yml, and add S3 credentials.


Start the development server:

    ruby -rubygems screenshooter.rb


From any machine, shoot a URL:

    curl "http://localhost:4567/?url=http://tycho.usno.navy.mil/cgi-bin/timer.pl"

    curl "http://localhost:4567/?url=http://raphaeljs.com/tiger.html&width=300&height=200"

## Authors

- Jay Boice, jay.boice@huffingtonpost.com
- Aaron Bycoffe, bycoffe@huffingtonpost.com
- Andrei Scheinkman, andrei@huffingtonpost.com

## Copyright

Copyright (c) 2012 The Huffington Post. See LICENSE for details.