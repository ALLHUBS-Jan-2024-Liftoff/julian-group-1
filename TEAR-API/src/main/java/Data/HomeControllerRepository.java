package Data;
import org.launchcode.TEAR_API.HomeController;
import org.springframework.data.repository.CrudRepository;

public interface HomeControllerRepository extends CrudRepository<HomeController, Long> {
    // custom query methods can be added here if needed
}

