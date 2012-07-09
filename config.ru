log = File.new("log/sinatra.log", "a")
$stdout.reopen(log)
$stderr.reopen(log)

require './screenshooter'
set :environment, :production
run Sinatra::Application