package com.boxinator.boxinator;

import com.boxinator.boxinator.Classes.Box;
import com.boxinator.boxinator.Classes.BoxRespository;
import com.boxinator.boxinator.Classes.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import static java.lang.Double.parseDouble;


@CrossOrigin(origins = "*")
@SpringBootApplication
@RestController
public class BoxinatorApplication {

	 Utils _utils = new Utils();

	@Autowired
	BoxRespository boxRespository;

	public static void main(String[] args) {
		SpringApplication.run(BoxinatorApplication.class, args);
	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}

	@GetMapping("/boxes")
	public List<Box> getBoxes() {
		return boxRespository.getAllBoxes();
	}

	@PostMapping("/box")
	public void addBox(@RequestBody Map<String, String> body) {
		String name = body.get("name");
		String weight = body.get("weight");
		String color = body.get("color");
		String country = body.get("country");

		double shipmentCost = _utils.GetShipmentCost(parseDouble(weight), country);

		boxRespository.addBox(name,weight,color,country, shipmentCost);
	}

}