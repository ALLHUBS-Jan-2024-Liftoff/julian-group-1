package org.launchcode.TEAR_API;


import Data.HomeControllerRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {
    private HomeControllerRepository homeControllerRepository;

 @GetMapping("/forgotPassword")
public String forgotPassword(){
     return "forgotPassword";
 }
@PostMapping("")
    public String login() {
        return "redirect:/login";
    }
    @GetMapping("/requestAccess")
    public String requestAccess() {
        return "requestAccess";
    }
    @PostMapping("/requestAcsess")
    public String requestAcsess() {
     return "redirect:/login";
    }

}
