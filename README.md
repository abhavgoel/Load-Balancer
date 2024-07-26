# Load-Balancer
A Round-Robin based Load Balancer: Distributes requests to a list of servers in a cyclic order.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abhavgoel/Load-Balancer.git
   cd https://github.com/abhavgoel/Load-Balancer.git
    ```

2. Install dependencies:

    ```bash 
    npm install
    ```

3. Configure the servers in **index.js**

    ```javascript
    const servers = [
        { name: 'Server 1', port: 3001 , hostname: "localhost"},
        { name: 'Server 2', port: 3002 , hostname: "localhost"},
        { name: 'Server 3', port: 3003 , hostname: "localhost"},
    ];
    ```


3. Run the servers

    I have created a script to run the servers.
    ```
    ./run_servers.sh
    ```

    This would run your servers and the entry point server i.e. the load balancer.


You can access the load balancer at `http://localhost:3000`

**Note:** Remember when ypu ruin servers using the `run_servers.sh` script you wont be able to kill them using `Ctrl + C`. This is because in Unix systems background process are not terminated by `Ctrl+C`.
So you can either kill then via terminal (by looking for process by `ps -x` command) or use the `kill_servers.sh` script. But keep in mind that this script will kill all processes that starts with "node" and ends with "js". It uses regex to find node processes from the `ps -x` command adn kills them.

