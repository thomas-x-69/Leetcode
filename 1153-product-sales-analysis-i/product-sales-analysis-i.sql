# Write your MySQL query statement below
SELECT product_name, year, price FROM Sales 
join product on Sales.product_id  = Product.product_id 