package Data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepositoryRepository<> {
    // custom query methods can be added here if needed
}

