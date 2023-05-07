package mvc;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Controller
public class CalcController {

    @PostMapping("/calc")
    public ResponseEntity<?> calculate(@RequestBody Calculation calculation) {
        double result=0.0;

        switch(calculation.getOperation()){
            case "+" : {result = calculation.getNumber1() + calculation.getNumber2(); break;}
            case "-" : {result = calculation.getNumber1() - calculation.getNumber2(); break;}
            case "*" : {result = calculation.getNumber1() * calculation.getNumber2(); break;}
            case "/" : {result = calculation.getNumber1() / calculation.getNumber2(); break;}
        }
        CalculationResult calculationResult = new CalculationResult(calculation.getNumber1(), calculation.getNumber2(),calculation.getOperation(), result);
        return new ResponseEntity<CalculationResult>(calculationResult, HttpStatus.OK);
    }
}
