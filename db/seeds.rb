# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# require 'open-uri'

 Ingredient.destroy_all
# puts "#{Ingredient.all.count}"

url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
cocktails_serialized = open(url).read
cocktails = JSON.parse(cocktails_serialized)

cocktails.values[0].each do |ingredient|
  uc = (((rand()/12) * 10**2).ceil.to_f / 10**2)
  Ingredient.create(name: ingredient.values[0] + "- u.price :" + uc.to_s, unitprice: uc)
end

# puts "#{Ingredient.all.count}"


