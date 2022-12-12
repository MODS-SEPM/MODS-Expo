import sqlite3

con = sqlite3.connect("database_for_locations.db")
con.execute('''
    Create table location(
        loc_id INT AUTO_INCREMENT PRIMARY KEY,
        loc_name VARCHAR(50),
        loc_address VARCHAR(100)
        )
    ''')

con.close()