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

## Getting Started

1. Create <code>s3.yml</code> from <code>s3.sample.yml</code> and add your S3 credentials.


2. Start the server:

    ruby -rubygems screenshooter.rb


3. From any machine, shoot a URL:

    curl "http://localhost:4567/?url=http://tycho.usno.navy.mil/cgi-bin/timer.pl"
    curl "http://localhost:4567/?url=http://raphaeljs.com/tiger.html&width=300&height=200"

## Authors

- Jay Boice, jay.boice@huffingtonpost.com
- Aaron Bycoffe, bycoffe@huffingtonpost.com
- Andrei Scheinkman, andrei@huffingtonpost.com

## Copyright

Copyright (c) 2012 The Huffington Post. See LICENSE for details.