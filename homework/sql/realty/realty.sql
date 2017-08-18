The average square footage of all offices.

SELECT AVG(square_footage)
FROM offices;

The total number of apartments.

SELECT COUNT(id)
FROM aparmtments;

The apartments where there is no tenant

SELECT *
FROM apartments
WHERE tenant = false;

The names of all of the companies

SELECT company_name
FROM offices;

The number of cubicles and bathrooms in the 3rd office

SELECT number_cubicles, number_bathroom
FROM offices
WHERE id = 3;

The storefronts that have kitchens

SELECT *
FROM storefronts
WHERE kitchen = true;

The storefront with the highest square footage and outdoor seating
 
SELECT MAX(square_footage)
FROM storefronts
WHERE outdoor_seating = true;

SELECT *
FROM storefronts
WHERE square_footage = 34253
AND outdoor_seating=true;

The office with the lowest number of cubicles

SELECT MIN(number_cubicles)
FROM offices;

SELECT *
FROM offices
WHERE number_cubicles=30;

The office with the most cubicles and bathrooms

SELECT MAX(number_cubicles), MAX(number_bathrooms)
FROM offices;

SELECT *
FROM offices
WHERE number_cubicles=41;

SELECT *
FROM offices
WHERE number_bathrooms=8;