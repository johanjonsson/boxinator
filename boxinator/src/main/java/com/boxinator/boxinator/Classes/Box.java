package com.boxinator.boxinator.Classes;

import javax.persistence.*;

@Entity
@Table(name = "Boxes")
public class Box {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private int boxId;

    @Column
    private String name;

    @Column
    private double weight;

    @Column
    private String country;

    @Column
    private String color;

    @Column
    private double shippingCost;

    public Box() {
    }

    public Box(int boxId, String name, double weight, String country, String color, double shippingCost) {
        this.boxId = boxId;
        this.name = name;
        this.weight = weight;
        this.country = country;
        this.color = color;
        this.shippingCost = shippingCost;
    }

    public Box(String name, double weight, String country, String color, double shippingCost) {
        this.name = name;
        this.weight = weight;
        this.country = country;
        this.color = color;
        this.shippingCost = shippingCost;
    }

    public int getId() { return boxId; }

    public void setId(int boxId) { this.boxId = boxId; }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getShippingCost() { return shippingCost; }

    public void setShippingCost(double shippingCost) { this.shippingCost = shippingCost; }
}
