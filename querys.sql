SELECT * FROM information_schema.tables WHERE table_schema='public';

SELECT * FROM office_niv_1;
SELECT * FROM office_niv_2;
SELECT * FROM office_niv_3;
SELECT * FROM office_niv_4;

SELECT office_1.name_office, office_2.name_office, office_3.name_office, office_4.name_office
FROM office_niv_1 office_1
LEFT JOIN office_niv_2 office_2 ON office_2.id_office_niv_1 = office_1.id_office_niv_1
LEFT JOIN office_niv_3 office_3 ON office_3.id_office_niv_2 = office_2.id_office_niv_2
LEFT JOIN office_niv_4 office_4 ON office_4.id_office_niv_3 = office_3.id_office_niv_3
ORDER BY office_1.id_office_niv_1;


SELECT * FROM institution;