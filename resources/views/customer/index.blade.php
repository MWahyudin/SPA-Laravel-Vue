<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    @foreach ($customer as $cust)
       <ul>
           <li>
            {{ $cust->name }}
            
           </li>
           <li>{{ $cust->email }}</li>
           <li>{{ $cust->address['country'] }}</li>
       </ul>
    @endforeach
    
</body>
</html>