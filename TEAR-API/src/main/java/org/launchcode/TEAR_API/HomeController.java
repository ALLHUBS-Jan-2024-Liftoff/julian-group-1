package org.launchcode.TEAR_API;

import Data.HomeControllerRepository;
import org.apache.catalina.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;




@Controller
public class HomeController {

    private HomeControllerRepository homeControllerRepository;

@GetMapping(path ="")
    public String Home(){
        return "login";
    }
@PostMapping("/login")
public String handleLoginRequest(@ModelAttribute  User user ){
        return "userPage";
}
@GetMapping("/createAccount")
    public String showCreateAccount() {
        return "createAccount";
    }
@PostMapping("/newAccountSetup")
 public String handleNewAccountSetup(@ModelAttribute User user){
        return "redirect:/newChildPage";
}
@GetMapping("/newAccountSetup")
    public String newAccountSetup() {
        return "/newAccountSetup";
}
}
