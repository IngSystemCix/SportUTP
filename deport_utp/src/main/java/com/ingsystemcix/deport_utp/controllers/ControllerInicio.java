package com.ingsystemcix.deport_utp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerInicio {
    @GetMapping(path = "/inicio")
    String inicio () {
        return "inicio";
    }
}
