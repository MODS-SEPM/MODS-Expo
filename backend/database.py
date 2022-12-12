import sqlite3

conn = sqlite3.connect('database.db')
c = conn.cursor()

c.execute('''
          CREATE TABLE IF NOT EXISTS users
          (userid INTEGER PRIMARY KEY, 
          username TEXT, 
          email TEXT, 
          password TEXT, 
          first_name TEXT, 
          last_name TEXT, 
          date_created TEXT)
          ''')

c.execute('''
          CREATE TABLE IF NOT EXISTS locations
          (location_id INTEGER PRIMARY KEY, 
          location_name TEXT, 
          coordinates TEXT, 
          address TEXT,
          date_added TEXT,
          story TEXT)
          ''')

# c.execute('''DROP TABLE IF EXISTS culinary''')
#
# conn.commit()

c.execute('''
          CREATE TABLE IF NOT EXISTS culinary
          (restaurant_id INTEGER PRIMARY KEY, 
          restaurant_name TEXT, 
          coordinate TEXT, 
          address TEXT, 
          date_added TEXT,
          type_of_restaurant TEXT)
          ''')


# c.execute('''INSERT INTO users(
#    username, email, password, first_name, last_name, date_created) VALUES 
#    ('user1', 'z@mail.com', 'user1', 'm', 'mm', '12/12/12')''')

conn.commit()
# print("Records inserted........")

# c.execute('''SELECT * from users''')
#Fetching 1st row from the table
# result = c.fetchall()
# print(result)

# Closing the connection
conn.close()



