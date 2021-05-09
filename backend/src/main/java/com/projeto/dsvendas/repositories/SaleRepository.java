package com.projeto.dsvendas.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.projeto.dsvendas.dto.SaleSumDTO;
import com.projeto.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	@Query("SELECT new com.projeto.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)" + "FROM Sale AS obj GRUP BY obj.seller")
	List<SaleSumDTO> amountGrupBySeller();
}
	