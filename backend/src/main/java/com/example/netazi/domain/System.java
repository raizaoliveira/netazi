package com.example.netazi.domain;

import javax.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@Table(name="systems")
public class System {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter @Setter private long id;
    @Getter @Setter private String name;
    @Getter @Setter private String description;
    @Getter @Setter private String status;


    public System(String name, String description, String status){
        this.name = name;
        this.description = description;
        this.status = status;
    }
}
