require 'sinatra'
require 'sinatra/partial'

set :public_dir, Proc.new { File.join(root, "public")}
set :public_folder, 'public'

set :partial_template_engine, :erb

get '/' do
	erb :index
end