# live-db-map-update
Updates simulated device location values from a Node-Red flow to a Database to a node.js application with a Google Maps frame. Done as part of a task at a summer internship. Good job, me! (No?)

**Note:** If you would like to see the presentation and demo video made during the internship, you may head on over to the **presentations** folder. 

## Getting Started

### Dependencies

As with a Node.js application, dependencies are noted in **package.json** and **package-lock.json**.

```
git clone https://github.com/qenfay/live-db-map-update.git
cd live-db-map-update
npm install
```

You will also need a 
1. MySQL server set up for the database
2. Google Map API key with a callback to _initialize_
3. Node-Red (to update the values in the database as I did)

### Set Up

1. Create a database
2. Run **myqsl/tabledefinition.sql** to initialise your tables.
3. Enter database access details in **config/congfig.php**
4. Import Node-Red flow at **node-red-flows/node-red-flow.json** into your Node-Red workspace
5. Enter database access details in the _database_ node. 
6. In **dashboardSB1.html**, replace the string _INSERT-GOOGLE-MAPS-API-HERE-WITH-CALLBACK-OF-INITIALIZE_ with the Google Maps API link with a callback of _initialize_.
7. Deploy your Node-Red flow

### Executing program

1. In the project directory, run
```
npm start 
```

## Authors

- Muhammad Shaafay Saqib (me!) [@qenfay](https://github.com/qenfay/)

## Room for Improvement
- Design could be greatly improved
- Code could use some cleaning up, such as keeping global project variables in a JSON file or set as environment variables (e.g API Key, Database Access Details)
