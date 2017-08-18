drop table if exists Apartments;
drop table if exists Offices;
drop table if exists Storefronts;

create table Apartments(
    id serial primary key,
    apartment_number integer,
    number_bedrooms integer,
    number_bathrooms integer,
    address varchar(255) not null,
    tenant varchar(255),
    occupied boolean,
    square_footage integer,
    price money 
);

create table Offices(
    id serial primary key,
    office_number integer,
    number_floors integer,
    square_footage integer,
    number_cubicles integer,
    number_bathrooms integer,
    address varchar(255) not null,
    company_name varchar(255),
    occupied boolean,
    price money 
);

create table Storefronts(
    id serial primary key,
    address varchar(255) not null,
    occupied boolean,
    price money,
    kitchen boolean,
    square_footage integer,
    owner varchar(255),
    outdoor_seating boolean DEFAULT false
);