# Instantiate the .env file on load
# config/boot.rb

if Gem::Specification.find_all_by_name('dotenv').any?
  require 'dotenv'
  Dotenv.load
  # More specific file
  # Dotenv.load "config/env/#{ ENV['RAILS_ENV'] || :development }.env"
end