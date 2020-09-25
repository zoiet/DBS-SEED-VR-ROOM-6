# DBS-SEED-VR-ROOM-6

TechTrek Challenge VR Room 6

Login API credentials  
username: caritativofiona  
password: 922cb712bea79bc8

Setup server

1. cd to dbs-techtrek-server
2. run 'npm install'

Start server

1. cd to dbs-techtrek-server
2. run 'npm run server'

APIs available

1. http://localhost:5000/login  
   -body-  
   {  
    "username": "caritativofiona",  
    "password": "922cb712bea79bc8"  
   }  
   -response-  
   {  
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9. eyJ1c2VybmFtZSI6ImNhcml0YXRpdm9maW9uYSIsImlhdCI6MTYwMTAwNzM4MiwiZXhwIjoxNjAxMDA3OTgyLCJpc3MiOiJ0ZWNodHJlazIwMjAifQ.uB9FTpM07u3_ntHOvQSh2eH87pxXCHHKOUEDAqp2_Isq3kcX4uzAAWisrYREaGvdDIPzpfn_5SE7VdZSRl8zMg"  
   }
     
2. http://localhost:5000/extendSession  
   -header-  
   Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcml0YXRpdm9maW9uYSIsImlhdCI6MTYwMTAxMTEzMSwiZXhwIjoxNjAxMDExNzMxLCJpc3MiOiJ0ZWNodHJlazIwMjAifQ.PfZ8pFjrVivxbL_MIj06Yk4XWRJrDF1f-Pps8MKwwR7Qh9KX6QlJlT5boo9qOU_KyT4kDk5XgGS7NX2dArHLHg  
   -body-  
   {  
    "username": "caritativofiona",  
    "password": "922cb712bea79bc8"  
   }  
   -response-  
   {  
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9. eyJ1c2VybmFtZSI6ImNhcml0YXRpdm9maW9uYSIsImlhdCI6MTYwMTAwNzM4MiwiZXhwIjoxNjAxMDA3OTgyLCJpc3MiOiJ0ZWNodHJlazIwMjAifQ.uB9FTpM07u3_ntHOvQSh2eH87pxXCHHKOUEDAqp2_Isq3kcX4uzAAWisrYREaGvdDIPzpfn_5SE7VdZSRl8zMg"  
   }
