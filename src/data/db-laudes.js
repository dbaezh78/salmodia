export const dbLaudes = [

//datos.Variable
    
// ********* tps1js: Tiempo Pascual, Semana 1 Jueves Oficio de Lectura*********
    {        id:                            "tps1jsOF",
             tt:                            "OFICIO DE LECTURA",
            sub:                            "(Oración de la mañana)",
    invitatorio: {
         titulo:                            "INVITATORIO",
    instruccion:                            instruccion, //(Si Laudes no es la primera oración del día se sigue el esquema del Invitatorio explicado en el Oficio de Lectura)
              v:                            invitatorio1,
              r:                            invitatorio2,
        },
        
        antifonaInvitatorio:                inv_tiempo_pacual,

        // datos.salmoInvitatorio.VARIABLE
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
            antifonaInvitatorio:            inv_tiempo_pacual,

            // Antifona de Entrada
            antifonaInvitatorio_Salida:     inv_tiempo_pacual,
            
            // Himno
            himnot:                         htps1jsLAt,
            himno:                          htps1jsLA,
        },

        // Salmodia 1, 2, 3
        Salmodias: {
            Ant1:                           tps1jsantLA1,
            SalmoUNOt:                      salmo62_2_9t,
            SalmoUNO:                       salmo62_2_9,

            Ant2:                           tps1jsantLA2,
            SalmoDOSt:                      dn_3_57_88_56t,
            SalmoDOS:                       dn_3_57_88_56,

            Ant3:                           tps1jsantLA3,
            SalmoTRESt:                     salmo149t,
            SalmoTRES:                      salmo149,
        },

        //Lectura Breve
        LecturaBreve: {
            LecturaCita:                    lb_rm8_10_11t,
            LecturaTexto:                   lb_rm8_10_11,
            responsoriobreve:               "RESPONSORIO BREVE",
            nota:                           tps1jlaudes_respt,
            responsorio:                    tps1jlaudes_resp,
        },

        //Cantico Evangelico
        cEvan_Conclusion: {
            cEvangelicoAnt:                 tps1js_cEvangelico,
            canticoZacariast:               canticoZacariast,
            canticoZacarias:                canticoZacarias,
            cEvangelico:                    tps1js_cEvangelico,
    
            preces1:                        tps1jslaud_preces1,
            preces2:                        tps1jslaud_preces2,
    
            Padren:                         "Padre nuestro...",
    
            oracion:                        tps1jsLaud_oracion,

            Conclusion1:                    Conclusion1,
            Conclusion2:                    Conclusion2,
        },
    },  // ***********************************************************

// ********* tps1jsLA: Tiempo Pascual, Semana 1 Jueves - Laudes *********
    {        id:                            "tps1jsLA",
             tt:                            "LAUDES",
            sub:                            "(Oración de la mañana)",
    invitatorio: {
         titulo:                            "INVITATORIO",
    instruccion:                            instruccion, //(Si Laudes no es la primera oración del día se sigue el esquema del Invitatorio explicado en el Oficio de Lectura)
              v:                            invitatorio1,
              r:                            invitatorio2,
        },
        
        antifonaInvitatorio:                inv_tiempo_pacual,

        // datos.salmoInvitatorio.VARIABLE
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
            antifonaInvitatorio:            inv_tiempo_pacual,

            // Antifona de Entrada
            antifonaInvitatorio_Salida:     inv_tiempo_pacual,
            
            // Himno
            himnot:                         htps1jsLAt,
            himno:                          htps1jsLA,
        },

        // Salmodia 1, 2, 3
        Salmodias: {
            Ant1:                           tps1jsantLA1,
            SalmoUNOt:                      salmo62_2_9t,
            SalmoUNO:                       salmo62_2_9,

            Ant2:                           tps1jsantLA2,
            SalmoDOSt:                      dn_3_57_88_56t,
            SalmoDOS:                       dn_3_57_88_56,

            Ant3:                           tps1jsantLA3,
            SalmoTRESt:                     salmo149t,
            SalmoTRES:                      salmo149,
        },

        //Lectura Breve
        LecturaBreve: {
            LecturaCita:                    lb_rm8_10_11t,
            LecturaTexto:                   lb_rm8_10_11,
            responsoriobreve:               "RESPONSORIO BREVE",
            nota:                           tps1jlaudes_respt,
            responsorio:                    tps1jlaudes_resp,
        },

        //Cantico Evangelico
        cEvan_Conclusion: {
            cEvangelicoAnt:                 tps1js_cEvangelico,
            canticoZacariast:               canticoZacariast,
            canticoZacarias:                canticoZacarias,
            cEvangelico:                    tps1js_cEvangelico,
    
            preces1:                        tps1jslaud_preces1,
            preces2:                        tps1jslaud_preces2,
    
            Padren:                         "Padre nuestro...",
    
            oracion:                        tps1jsLaud_oracion,

            Conclusion1:                    Conclusion1,
            Conclusion2:                    Conclusion2,
        },
    },  // ***********************************************************
    // 
    








];