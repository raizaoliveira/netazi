package com.example.netazi.controller;

import com.example.netazi.domain.System;
import com.example.netazi.exception.SystemNotFoundException;
import com.example.netazi.repository.SystemRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;



@RestController()
@RequestMapping("/api")
public class BackendController {

    private static final Logger LOG = LoggerFactory.getLogger(BackendController.class);

    public static final String HELLO_TEXT = "Hello from Spring Boot Backend!";
    public static final String SECURED_TEXT = "Hello from the secured resource!";

    @Autowired
    private SystemRepository systemRepository;

    @RequestMapping(path = "/hello")
    public String sayHello() {
        LOG.info("GET called on /hello resource");
        return HELLO_TEXT;
    }

    @RequestMapping(path = "/System/{name}/{description}/{status}", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public String addNewSystem (@PathVariable("name") String name, @PathVariable("description") String description, @PathVariable("status") String status) {
        System savedSystem = systemRepository.save(new System(name, description, status));
        LOG.info(savedSystem.toString() + " successfully saved into DB");
        //return savedSystem.getName();
        return "System saved";
    }

    @RequestMapping(path = "/System", method = RequestMethod.GET)
    //public ArrayList<ArrayList<String>> retrieves (){
    public String retrieves (){
        ArrayList <ArrayList<String>> systems = new ArrayList<ArrayList<String>>();
        ArrayList system = new ArrayList();
        system.add("Patrimônio");
        system.add("Gestão de bens mobiliários e imobiliários");
        system.add("complete");
        systems.add(system);
        system.clear();
        system.add("Almoxarifado");
        system.add("Gestão de estoque e almoxarido");
        system.add("ongoing");
        systems.add(system);

        return "systems return";
    }

    /*
    @GetMapping(path = "/System/{name}")
    public System getSystemByName(@PathVariable("name") String name) {

        return systemRepository.findById(name).map(System -> {
            LOG.info("Reading System called " + name + " from database.");
            return System;
        }).orElseThrow(() -> new SystemNotFoundException("The System called" + name + " couldn't be found in the database."));
    }*/

    @RequestMapping(path="/secured", method = RequestMethod.GET)
    public @ResponseBody String getSecured() {
        LOG.info("GET successfully called on /secured resource");
        return SECURED_TEXT;
    }

    // Forwards all routes to FrontEnd except: '/', '/index.html', '/api', '/api/**'
    // Required because of 'mode: history' usage in frontend routing, see README for further details
    @RequestMapping(value = "{_:^(?!index\\.html|api).$}")
    public String redirectApi() {
        LOG.info("URL entered directly into the Browser, so we need to redirect...");
        return "forward:/";
    }

}
