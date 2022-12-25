There is only one endpoint that could be called by front-end, all the requirements could be met by front-end code

What's done on backend:
- implemented request that sends data in chunks each 10 seconds
- stopped background process and end a request once all chunks are sended
- stopped background process once request was closed by client

[*] User needs to be presented current result of all 3 matches, total goals counter as well as Start/Finish/Restart button(or backend endpoint).
Start button is a call to backend that initializes chunks sending
Finish button closes a request to backend
Restart button closes a request and starts a new one on backend
[*] Each simulation takes 90 seconds (unless manually finished by the user before 90 seconds elapses).
[*] User needs to click on Start button (or backend endpoint) to start the simulation.
- A start button initializes a requet to backend and waits for chunks of data
[*] Before 90 seconds elapses user can manually finish the simulation by clicking Finish button (or backend endpoint). If simulation hasn’t been manually finished, it’s automatically stopped after 90 seconds.
- That is checked by backend: if user closes his request then backend stops a simulation (line: 27)
[*] Every 10 seconds random team scores exactly 1 goal. First goal is scored at the 10th second, last goal is scored at the 90th second.
- Line: 17
[*] When a simulation is finished, user can restart it using Restart button (or backend endpoint). Then the results are reset and the simulation starts again.

To check how's that working just open http://localhost/

P.S. There is one issue with SSE: it has limits on number of connections per browser per domain when using it throught HTTP/1.1, so the best here is to configure nginx/apache to work through HTTP/2.X
