package org.launchcode.TEAR_API;

import Data.HomeControllerRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class NewChildController {
  private HomeControllerRepository homeControllerRepository;


@GetMapping(path="/newChildPage")
 public String newChildPage(){

    return "newChildPage";
}
@PostMapping("/newChildPage")
    public String handlenewChildPage(){
    return "redirect:/archivedMemories";
}
@GetMapping("/archivedMemories")
    public String archivedMemories() {
    return "archivedMemories";
}
    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }
@PostMapping("/createAccount")
        public String handleLoginRequest(){
    return "login";
    }
}
