package com.boxinator.boxinator.Classes;

public class Utils {

    public double GetShipmentCost(double weight, String country) {
        double price = 0;
        if(country.toLowerCase().equals("australia")) {
            price = weight * 7.2;
        }
        if(country.toLowerCase().equals("brazil")) {
            price = weight * 8.6;
        }
        if(country.toLowerCase().equals("china")) {
            price = weight * 4;
        }
        if(country.toLowerCase().equals("sweden")) {
            price = weight * 1.3;
        }
        return price;
    }
}
