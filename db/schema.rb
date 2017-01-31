# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170131194520) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "units", force: :cascade do |t|
    t.string  "army",        null: false
    t.string  "unitName",    null: false
    t.integer "minimumSize", null: false
    t.integer "maximumSize", null: false
    t.integer "ws",          null: false
    t.integer "bs",          null: false
    t.integer "strength",    null: false
    t.integer "toughness",   null: false
    t.integer "wounds",      null: false
    t.integer "iniative",    null: false
    t.integer "attacks",     null: false
    t.integer "leadership",  null: false
    t.integer "sv",          null: false
  end

  create_table "weapons", force: :cascade do |t|
    t.string  "name",           null: false
    t.integer "range",          null: false
    t.integer "shots",          null: false
    t.integer "weaponStrength", null: false
    t.integer "ap",             null: false
    t.string  "firstSpecial"
    t.string  "secondSpecial"
    t.string  "thirdSpecial"
    t.string  "fourthSpecial"
  end

end
