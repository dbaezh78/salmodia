// 1. El denominador común de la estructura principal (Salmos, Lecturas, etc.)
// s1TO1 = Semana 1 Tiempo Ordinario Comun (1,5,9,13,17,21,25,29,33)
    const s1TO1 = {
        tt:                                 "LAUDES",
        sub:                                "(Oración de la mañana)",
        invitatorio: {
            titulo:                         "INVITATORIO",
            instruccion:                    instruccion,
            v:                              invitatorio1,
            r:                              invitatorio2,       },
// Invitatorio
        antifonaInvitatorio:                tos1LAdmI,
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
// Antifona de Entrada
            antifonaInvitatorio:            tos1LAdmI,
            antifonaInvitatorio_Salida:     tos1LAdmI,
// Himno
            himnot:                         htos1LAdmt,
            himno:                          htos1LAdm,          },

        Salmodias: {
// Salmodia 1    
            Ant1:                           tos1LAdm1,
            SalmoUNOt:                      salmo117t,
            SalmoUNO:                       salmo117,
// Salmodia 2    
            Ant2:                           tos1LAdm2,
            SalmoDOSt:                      dn_3_57_88_56t,
            SalmoDOS:                       dn_3_57_88_56,
// Salmodia 3
            Ant3:                           tos1LAdm3,
            SalmoTRESt:                     salmo150t,
            SalmoTRES:                      salmo150,           },
// Lectura Breve
        LecturaBreve: {
            LecturaCita:                    tos1LAdm_lbt,
            LecturaTexto:                   tos1LAdm_lb,
//RESPONSORIO BREVE
            responsorio1:                   tos1LAdm_rb,
            responsorio2:                   tos1LAdm_rb,
            responsorio3:                   tos1LAdm_rb1,
            responsorio4:                   tos1LAdm_rb2,
            gloria:                         gloria,
            responsorio5:                   tos1LAdm_rb,        }};

    // 2. El denominador común para el bloque de conclusión (Zacarías, Padre Nuestro, Final)
    const s1TO2 = {
//CANTICO EVANGELICO
        canticoZacariast: canticoZacariast,
        canticoZacarias:  canticoZacarias,
// PRECES
        preces1:          tos1LAdm_preces1,
        preces2:          tos1LAdm_preces2,
// PADRE NUESTRO Y ORACIONES CONCUSIVAS
        Padren:           "Padre nuestro...",
        oracion:          tos1LAdm_oracion,
        Conclusion1:      Conclusion1,
        Conclusion2:      Conclusion2                           };

// 1. El denominador común de la estructura principal (Salmos, Lecturas, etc.)
// COMUN 2,6,10,14,18,22,26,30
    const s2TO1 = {
        tt:                            "LAUDES",
        sub:                           "(Oración de la mañana)",
        invitatorio: {
            titulo:                    "INVITATORIO",
            instruccion:               instruccion,
            v:                         invitatorio1,
            r:                         invitatorio2,            },
// Invitatorio
        antifonaInvitatorio:           tos2LAdmI,
        salmoInvitatorio: {
            titulo:                    salmo94t,
            subtitulo:                 invitacion,
            contentInv:                salmo94,
// Antifona de Entrada
            antifonaInvitatorio:       tos2LAdmI,
            antifonaInvitatorio_Salida:tos2LAdmI,
// Himno
            himnot:                    htos2LAdmt,
            himno:                     htos2LAdm,
        },

        Salmodias: {
// Salmodia 1    
            Ant1:                      tos2LAdm1,
            SalmoUNOt:                 salmo117t,
            SalmoUNO:                  salmo117,
// Salmodia 2    
            Ant2:                      tos2LAdm2,
            SalmoDOSt:                 dn_3_57_88_56t,
            SalmoDOS:                  dn_3_57_88_56,
// Salmodia 3
            Ant3:                      tos2LAdm3,
            SalmoTRESt:                salmo150t,
            SalmoTRES:                 salmo150,        },
// Lectura Breve
        LecturaBreve: {
            LecturaCita:               tos2LAdm_lbt,
            LecturaTexto:              tos2LAdm_lb,
//RESPONSORIO BREVE
            responsorio1:              tos2LAdm_rb,
            responsorio2:              tos2LAdm_rb,
            responsorio3:              tos2LAdm_rb1,
            responsorio4:              tos2LAdm_rb2,
            gloria:                    gloria,
            responsorio5:              tos2LAdm_rb,         }};

    // 2. El denominador común para el bloque de conclusión (Zacarías, Padre Nuestro, Final)
    const s2TO2 = {
//CANTICO EVANGELICO
        canticoZacariast: canticoZacariast,
        canticoZacarias:  canticoZacarias,
// PRECES
        preces1:          tos2LAdm_preces1,
        preces2:          tos2LAdm_preces2,
// PADRE NUESTRO Y ORACIONES CONCUSIVAS
        Padren:           "Padre nuestro...",
        oracion:          tos2LAdm_oracion,
        Conclusion1:      Conclusion1,
        Conclusion2:      Conclusion2           };

// COMUN 3,7,11,15,19,23,27,31
const s3TO1 = {
             tt:                            "LAUDES",
            sub:                            "(Oración de la mañana)",
    invitatorio: {
         titulo:                            "INVITATORIO",
    instruccion:                            instruccion, //(Si Laudes no es la primera oración del día se sigue el esquema del Invitatorio explicado en el Oficio de Lectura)
              v:                            invitatorio1,   
              r:                            invitatorio2,          },
// Invitatorio
        antifonaInvitatorio:                tos3LAdmI,
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
// Antifona de Entrada
            antifonaInvitatorio:            tos1LAdmI,
            antifonaInvitatorio_Salida:     tos1LAdmI,  
// Himno
            himnot:                         htos3LAdmt,
            himno:                          htos3LAdm,
        },
        Salmodias: {
// Salmodia 1
            Ant1:                           tos3LAdm1,
            SalmoUNOt:                      salmo92t,
            SalmoUNO:                       salmo92,
// Salmodia 2
            Ant2:                           tos3LAdm2,
            SalmoDOSt:                      dn_3_57_88_56t,
            SalmoDOS:                       dn_3_57_88_56,
// Salmodia 3
            Ant3:                           tos3LAdm3,
            SalmoTRESt:                     salmo148t,
            SalmoTRES:                      salmo148,
        },
//LECTURA BREVE
        LecturaBreve: {
            LecturaCita:                    tos3LAdm_lbt,
            LecturaTexto:                   tos3LAdm_lb,
//RESPONSORIO BREVE
            responsorio1:                    tos3LAdm_rb,
            responsorio2:                    tos3LAdm_rb,
            responsorio3:                    tos3LAdm_rb1,
            responsorio4:                    tos3LAdm_rb2,
            gloria:                          gloria,
            responsorio5:                    tos3LAdm_rb,
        }
    };

// 2. El denominador común para el bloque de conclusión (Zacarías, Padre Nuestro, Final)
    const s3TO2 = {
//CANTICO EVANGELICO
        canticoZacariast:               canticoZacariast,
        canticoZacarias:                canticoZacarias,
//PRECES
        preces1:                        tos3LAdm_preces1,
        preces2:                        tos3LAdm_preces2,
// PADRE NUESTRO Y ORACIONES CONCUSIVAS
        Padren:                         "Padre nuestro...",
        oracion:                        tos3LAdm_oracion,
        Conclusion1:                    Conclusion1,
        Conclusion2:                    Conclusion2,
    };

// 1. El denominador común de la estructura principal (Salmos, Lecturas, etc.)
// COMUN 4,8,12,16,20,24,28,32
    const s4TO1 = {
        tt:                                 "LAUDES",
        sub:                                "(Oración de la mañana)",
        invitatorio: {
            titulo:                         "INVITATORIO",
            instruccion:                    instruccion,
            v:                              invitatorio1,
            r:                              invitatorio2,
        },

// Invitatorio
        antifonaInvitatorio:                tos4LAdmI,
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
// Antifona de Entrada
            antifonaInvitatorio:            tos4LAdmI,
            antifonaInvitatorio_Salida:     tos4LAdmI,
// Himno
            himnot:                         htos4LAdmt,
            himno:                          htos4LAdm,
        },

        Salmodias: {
// Salmodia 1    
            Ant1:                           tos4LAdm1,
            SalmoUNOt:                      salmo117t,
            SalmoUNO:                       salmo117,
// Salmodia 2
            Ant2:                           tos4LAdm2,
            SalmoDOSt:                      dn_3_57_88_56t,
            SalmoDOS:                       dn_3_57_88_56,
// Salmodia 3
            Ant3:                           tos4LAdm3,
            SalmoTRESt:                     salmo150t,
            SalmoTRES:                      salmo150,       },
// Lectura Breve
        LecturaBreve: {
            LecturaCita:                    tos4LAdm_lbt,
            LecturaTexto:                   tos4LAdm_lb,
//RESPONSORIO BREVE
            responsorio1:                   tos4LAdm_rb,
            responsorio2:                   tos4LAdm_rb,
            responsorio3:                   tos4LAdm_rb1,
            responsorio4:                   tos4LAdm_rb2,
            gloria:                         gloria,
            responsorio5:                   tos4LAdm_rb,
        }};

    // 2. El denominador común para el bloque de conclusión (Zacarías, Padre Nuestro, Final)
    const s4TO2 = {
//CANTICO EVANGELICO
        canticoZacariast: canticoZacariast,
        canticoZacarias:  canticoZacarias,
// PRECES
        preces1:          tos4LAdm_preces1,
        preces2:          tos4LAdm_preces2,
// PADRE NUESTRO Y ORACIONES CONCUSIVAS
        Padren:           "Padre nuestro...",
        oracion:          tos4LAdm_oracion,
        Conclusion1:      Conclusion1,
        Conclusion2:      Conclusion2           };

/**************************************************************************
***************** SEMANA 1 TIEMPO ORDINARIO LUNES PARTE 1 *****************
******** APLICA PARA LOS LUNES DE LA SEMANA 1,5,9,13,17,21,25,29,33 *******
***************************************************************************/
const s1TOln1 = {
        tt:                                 "LAUDES",
        sub:                                "(Oración de la mañana)",
        invitatorio: {
            titulo:                         "INVITATORIO",
            instruccion:                    instruccion,
            v:                              invitatorio1,
            r:                              invitatorio2,
        },

// Invitatorio
        antifonaInvitatorio:                tos1LAlnI,
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
// Antifona de Entrada
            antifonaInvitatorio:            tos1LAlnI,
            antifonaInvitatorio_Salida:     tos1LAlnI,
// Himno
            himnot:                         htos1LAlnt,
            himno:                          htos1LAln,
        },

        Salmodias: {
// Salmodia 1    
            Ant1:                           tos1LAln1,
            SalmoUNOt:                      Salmo5_2_10_12_13t,
            SalmoUNO:                       Salmo5_2_10_12_13,
// Salmodia 2
            Ant2:                           tos1LAln2,
            SalmoDOSt:                      ICro29_10_13t,
            SalmoDOS:                       ICro29_10_13,
// Salmodia 3
            Ant3:                           tos1LAln3,
            SalmoTRESt:                     salmo28t,
            SalmoTRES:                      salmo28,       },
// Lectura Breve
        LecturaBreve: {
            LecturaCita:                    tos1LAln_lbt,
            LecturaTexto:                   tos1LAln_lb,
//RESPONSORIO BREVE
            responsorio1:                   tos1LAln_rb,
            responsorio2:                   tos1LAln_rb,
            responsorio3:                   tos1LAln_rb1,
            responsorio4:                   tos1LAln_rb2,
            gloria:                         gloria,
            responsorio5:                   tos1LAln_rb,    },

//CANTICO EVANGELICO

        cEvan_Conclusion: {
            cEvangelicoAnt:                 tos1LAln_cE,
            canticoZacariast:               canticoZacariast,
            canticoZacarias:                canticoZacarias,

// PRECES
            preces1:                        tos1LAln_preces1,
            preces2:                        tos1LAln_preces2,
// PADRE NUESTRO Y ORACIONES CONCUSIVAS
            Padren:                         "Padre nuestro...",
            oracion:                        tos1LAln_oracion,
            Conclusion1:                    Conclusion1,
            Conclusion2:                    Conclusion2,
        }};

/**************************************************************************
********************* SEMANA 2 TIEMPO ORDINARIO LUNES *********************
******** APLICA PARA LOS LUNES DE LA SEMANA 1,5,9,13,17,21,25,29,33 *******
***************************************************************************/
const s2TOln1 = {
        tt:                                 "LAUDES",
        sub:                                "(Oración de la mañana)",
        invitatorio: {
            titulo:                         "INVITATORIO",
            instruccion:                    instruccion,
            v:                              invitatorio1,
            r:                              invitatorio2,
        },

// Invitatorio
        antifonaInvitatorio:                tos2LAlnI,
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
// Antifona de Entrada
            antifonaInvitatorio:            tos2LAlnI,
            antifonaInvitatorio_Salida:     tos2LAlnI,
// Himno
            himnot:                         htos2LAlnt,
            himno:                          htos2LAln,
        },

        Salmodias: {
// Salmodia 1    
            Ant1:                           tos2LAln1,
            SalmoUNOt:                      Salmo5_2_10_12_13t,
            SalmoUNO:                       Salmo5_2_10_12_13,
// Salmodia 2
            Ant2:                           tos2LAln2,
            SalmoDOSt:                      ICro29_10_13t,
            SalmoDOS:                       ICro29_10_13,
// Salmodia 3
            Ant3:                           tos2LAln3,
            SalmoTRESt:                     salmo28t,
            SalmoTRES:                      salmo28,       },
// Lectura Breve
        LecturaBreve: {
            LecturaCita:                    tos2LAln_lbt,
            LecturaTexto:                   tos2LAln_lb,
//RESPONSORIO BREVE
            responsorio1:                   tos2LAln_rb,
            responsorio2:                   tos2LAln_rb,
            responsorio3:                   tos2LAln_rb1,
            responsorio4:                   tos2LAln_rb2,
            gloria:                         gloria,
            responsorio5:                   tos2LAln_rb,    },

//CANTICO EVANGELICO

        cEvan_Conclusion: {
            cEvangelicoAnt:                 tos2LAln_cE,
            canticoZacariast:               canticoZacariast,
            canticoZacarias:                canticoZacarias,

// PRECES
            preces1:                        tos2LAln_preces1,
            preces2:                        tos2LAln_preces2,
// PADRE NUESTRO Y ORACIONES CONCUSIVAS
            Padren:                         "Padre nuestro...",
            oracion:                        tos2LAln_oracion,
            Conclusion1:                    Conclusion1,
            Conclusion2:                    Conclusion2,
        }};
/**************************************************************************
********************* SEMANA 2 TIEMPO ORDINARIO LUNES *********************
******** APLICA PARA LOS LUNES DE LA SEMANA 1,5,9,13,17,21,25,29,33 *******
***************************************************************************/

/**************************************************************************
********************* SEMANA 3 TIEMPO ORDINARIO LUNES *********************
********* APLICA PARA LOS LUNES DE LA SEMANA 3,7,11,15,19,23,27,31 ********
***************************************************************************/
const s3TOln1 = {
        tt:                                 "LAUDES",
        sub:                                "(Oración de la mañana)",
        invitatorio: {
            titulo:                         "INVITATORIO",
            instruccion:                    instruccion,
            v:                              invitatorio1,
            r:                              invitatorio2,
        },

// Invitatorio
        antifonaInvitatorio:                tos3LAlnI,
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
// Antifona de Entrada
            antifonaInvitatorio:            tos3LAlnI,
            antifonaInvitatorio_Salida:     tos3LAlnI,
// Himno
            himnot:                         htos3LAlnt,
            himno:                          htos3LAln,
        },

        Salmodias: {
// Salmodia 1    
            Ant1:                           tos3LAln1,
            SalmoUNOt:                      Salmo5_2_10_12_13t,
            SalmoUNO:                       Salmo5_2_10_12_13,
// Salmodia 2
            Ant2:                           tos3LAln2,
            SalmoDOSt:                      ICro29_10_13t,
            SalmoDOS:                       ICro29_10_13,
// Salmodia 3
            Ant3:                           tos3LAln3,
            SalmoTRESt:                     salmo28t,
            SalmoTRES:                      salmo28,       },
// Lectura Breve
        LecturaBreve: {
            LecturaCita:                    tos3LAln_lbt,
            LecturaTexto:                   tos3LAln_lb,
//RESPONSORIO BREVE
            responsorio1:                   tos3LAln_rb,
            responsorio2:                   tos3LAln_rb,
            responsorio3:                   tos3LAln_rb1,
            responsorio4:                   tos3LAln_rb2,
            gloria:                         gloria,
            responsorio5:                   tos3LAln_rb,    },

//CANTICO EVANGELICO

        cEvan_Conclusion: {
            cEvangelicoAnt:                 tos3LAln_cE,
            canticoZacariast:               canticoZacariast,
            canticoZacarias:                canticoZacarias,

// PRECES
            preces1:                        tos3LAln_preces1,
            preces2:                        tos3LAln_preces2,
// PADRE NUESTRO Y ORACIONES CONCUSIVAS
            Padren:                         "Padre nuestro...",
            oracion:                        tos3LAln_oracion,
            Conclusion1:                    Conclusion1,
            Conclusion2:                    Conclusion2,
        }};
/**************************************************************************
********************* SEMANA 3 TIEMPO ORDINARIO LUNES *********************
********* APLICA PARA LOS LUNES DE LA SEMANA 3,7,11,15,19,23,27,31 ********
***************************************************************************/

/**************************************************************************
********************* SEMANA 4 TIEMPO ORDINARIO LUNES *********************
********* APLICA PARA LOS LUNES DE LA SEMANA 4,8,12,16,20,24,28,32 ********
***************************************************************************/
const s4TOln1 = {
        tt:                                 "LAUDES",
        sub:                                "(Oración de la mañana)",
        invitatorio: {
            titulo:                         "INVITATORIO",
            instruccion:                    instruccion,
            v:                              invitatorio1,
            r:                              invitatorio2,
        },

// Invitatorio
        antifonaInvitatorio:                tos4LAlnI,
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
// Antifona de Entrada
            antifonaInvitatorio:            tos4LAlnI,
            antifonaInvitatorio_Salida:     tos4LAlnI,
// Himno
            himnot:                         htos4LAlnt,
            himno:                          htos4LAln,
        },

        Salmodias: {
// Salmodia 1    
            Ant1:                           tos4LAln1,
            SalmoUNOt:                      Salmo5_2_10_12_13t,
            SalmoUNO:                       Salmo5_2_10_12_13,
// Salmodia 2
            Ant2:                           tos4LAln2,
            SalmoDOSt:                      ICro29_10_13t,
            SalmoDOS:                       ICro29_10_13,
// Salmodia 3
            Ant3:                           tos4LAln3,
            SalmoTRESt:                     salmo28t,
            SalmoTRES:                      salmo28,       },
// Lectura Breve
        LecturaBreve: {
            LecturaCita:                    tos4LAln_lbt,
            LecturaTexto:                   tos4LAln_lb,
//RESPONSORIO BREVE
            responsorio1:                   tos4LAln_rb,
            responsorio2:                   tos4LAln_rb,
            responsorio3:                   tos4LAln_rb1,
            responsorio4:                   tos4LAln_rb2,
            gloria:                         gloria,
            responsorio5:                   tos4LAln_rb,    },

//CANTICO EVANGELICO

        cEvan_Conclusion: {
            cEvangelicoAnt:                 tos4LAln_cE,
            canticoZacariast:               canticoZacariast,
            canticoZacarias:                canticoZacarias,

// PRECES
            preces1:                        tos4LAln_preces1,
            preces2:                        tos4LAln_preces2,
// PADRE NUESTRO Y ORACIONES CONCUSIVAS
            Padren:                         "Padre nuestro...",
            oracion:                        tos4LAln_oracion,
            Conclusion1:                    Conclusion1,
            Conclusion2:                    Conclusion2,
        }};
/**************************************************************************
********************* SEMANA 4 TIEMPO ORDINARIO LUNES *********************
********* APLICA PARA LOS LUNES DE LA SEMANA 4,8,12,16,20,24,28,32 ********
***************************************************************************/




export const dbLaudes = [

//datos.Variable
    
// ********* tps1js: Tiempo Pascual, Semana 1 Jueves Oficio de Lectura*********
    {        id:                            "tps1LAjs",
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

// ********* tps1jsLA: Tiempo Pascual, Semana 1 Jueves - Laudes *********
    {        id:                            "tps1LAjs",
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

// ********* tps1LAjs: Tiempo Pascual, Semana 1 Viernes - Laudes *********
    {        id:                            "tps1LAvs",
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
            himnot:                         htps1vsLAt,
            himno:                          htps1vsLA,
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


// Tiempo Ordinario Semana 1 DOMINGO 1 - BAUTISMO DEL SEÑOR

// ********* tps1js: Tiempo Pascual, Semana 1 Jueves Oficio de Lectura*********
    {        id:                            "bautismoLA",
             tt:                            "LAUDES",
            sub:                            "(Oración de la mañana)",
    invitatorio: {
         titulo:                            "INVITATORIO",
    instruccion:                            instruccion, //(Si Laudes no es la primera oración del día se sigue el esquema del Invitatorio explicado en el Oficio de Lectura)
              v:                            invitatorio1,   // V. Señor abre mis labios
              r:                            invitatorio2,   // R. y mi boca proclamará tu alabanza
        },
        
        antifonaInvitatorio:                inv_bautismoLA,

        // datos.salmoInvitatorio.VARIABLE
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
            antifonaInvitatorio:            inv_bautismoLA,

            // Antifona de Entrada
            antifonaInvitatorio_Salida:     inv_bautismoLA,
            
            // Himno
            himnot:                         hbautismoLAt,
            himno:                          hbautismoLA,
        },

        // Salmodia 1, 2, 3
        Salmodias: {
            Ant1:                           bautismoLA1,
            SalmoUNOt:                      salmo62_2_9t,
            SalmoUNO:                       salmo62_2_9,

            Ant2:                           bautismoLA2,
            SalmoDOSt:                      dn_3_57_88_56t,
            SalmoDOS:                       dn_3_57_88_56,

            Ant3:                           bautismoLA3,
            SalmoTRESt:                     salmo149t,
            SalmoTRES:                      salmo149,
        },

        //Lectura Breve
        LecturaBreve: {
            LecturaCita:                    bautismoLA_lbt,
            LecturaTexto:                   bautismoLA_lb,
            
        //RESPONSORIO BREVE    
            responsorio1:                    bautismoLA_rb,
            responsorio2:                    bautismoLA_rb,
            responsorio3:                    bautismoLA_rb1,
            responsorio4:                    bautismoLA_rb2,
            gloria:                          gloria,
            responsorio5:                    bautismoLA_rb,
        },


        //Cantico Evangelico
        cEvan_Conclusion: {
            cEvangelicoAnt:                 window.antifonaDomingo(tos1LAdm_cE_A, tos1LAdm_cE_B, tos1LAdm_cE_C),
            canticoZacariast:               canticoZacariast,
            canticoZacarias:                canticoZacarias,
            
            
        //PRECES
            preces1:                        bautismoLA_preces1,
            preces2:                        bautismoLA_preces2,
    
            Padren:                         "Padre nuestro...",
    
            oracion:                        bautismoLA_oracion,

            Conclusion1:                    Conclusion1,
            Conclusion2:                    Conclusion2,
        },
    },  // ***********************************************************

    // ********* TOS1LADM: Tiempo Ordinario, Semana 1,5,9,13,21,25,29,33 LAUDES DOMINGO *********
    /*  TIEMPO ORDINARIO | DOMINGO DE LA SEMANA II, VI, X, XIV, XVIII, XXII, XXVI, XXX De la Feria. Salterio II    */
    {id: "tos1LAdm",  ...s1TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos1LAdm_cE_A,  tos1LAdm_cE_B,  tos1LAdm_cE_C),...s1TO2,}},
    {id: "tos5LAdm",  ...s1TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos5LAdm_cE_A,  tos5LAdm_cE_B,  tos5LAdm_cE_C),...s1TO2,}},
    {id: "tos9LAdm",  ...s1TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos9LAdm_cE_A,  tos9LAdm_cE_B,  tos9LAdm_cE_C),...s1TO2,}},
    {id: "tos13LAdm", ...s1TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos13LAdm_cE_A, tos13LAdm_cE_B, tos13LAdm_cE_C),...s1TO2,}},
    {id: "tos17LAdm", ...s1TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos17LAdm_cE_A, tos17LAdm_cE_B, tos17LAdm_cE_C),...s1TO2,}},
    {id: "tos21LAdm", ...s1TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos21LAdm_cE_A, tos21LAdm_cE_B, tos21LAdm_cE_C),...s1TO2,}},
    {id: "tos25LAdm", ...s1TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos25LAdm_cE_A, tos25LAdm_cE_B, tos25LAdm_cE_C),...s1TO2,}},
    {id: "tos29LAdm", ...s1TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos29LAdm_cE_A, tos29LAdm_cE_B, tos29LAdm_cE_C),...s1TO2,}},
    {id: "tos33LAdm", ...s1TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos33LAdm_cE_A, tos33LAdm_cE_B, tos33LAdm_cE_C),...s1TO2,}},
    // ********* tos2LAdm: Tiempo Ordinario, Semana 1,5,9,13,21,25,29,33 Laudes DOMINGO *********
// ********* TOS2LADM: Tiempo Ordinario, Semana 2,6,10,14,18,22,26,30 Laudes DOMINGO *********
/*  TIEMPO ORDINARIO | DOMINGO DE LA SEMANA II, VI, X, XIV, XVIII, XXII, XXVI, XXX De la Feria. Salterio II    */
    {id: "tos2LAdm",  ...s2TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos2LAdm_cE_A,  tos2LAdm_cE_B,  tos2LAdm_cE_C),...s2TO2,}},
    {id: "tos6LAdm",  ...s2TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos6LAdm_cE_A,  tos6LAdm_cE_B,  tos6LAdm_cE_C),...s2TO2,}},
    {id: "tos10LAdm", ...s2TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos10LAdm_cE_A, tos10LAdm_cE_B, tos10LAdm_cE_C),...s2TO2,}},
    {id: "tos14LAdm", ...s2TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos14LAdm_cE_A, tos14LAdm_cE_B, tos14LAdm_cE_C),...s2TO2,}},
    {id: "tos18LAdm", ...s2TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos18LAdm_cE_A, tos18LAdm_cE_B, tos18LAdm_cE_C),...s2TO2,}},
    {id: "tos22LAdm", ...s2TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos22LAdm_cE_A, tos22LAdm_cE_B, tos22LAdm_cE_C),...s2TO2,}},
    {id: "tos26LAdm", ...s2TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos26LAdm_cE_A, tos26LAdm_cE_B, tos26LAdm_cE_C),...s2TO2,}},
    {id: "tos30LAdm", ...s2TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos30LAdm_cE_A, tos30LAdm_cE_B, tos30LAdm_cE_C),...s2TO2,}},
// ********* tos2LAdm: Tiempo Ordinario, Semana 2 Laudes DOMINGO *********
// ********* TOS3LADM: Tiempo Ordinario, Semana 3,7,11,15,19,23,27,31 Laudes DOMINGO *********
/*  TIEMPO ORDINARIO | DOMINGO DE LA SEMANA II, VI, X, XIV, XVIII, XXII, XXVI, XXX De la Feria. Salterio II    */
    {id: "tos3LAdm",  ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos3LAdm_cE_A,  tos3LAdm_cE_B,  tos3LAdm_cE_C),...s3TO2,}},
    {id: "tos7LAdm",  ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos7LAdm_cE_A,  tos7LAdm_cE_B,  tos7LAdm_cE_C),...s3TO2,}},
    {id: "tos11LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos11LAdm_cE_A, tos11LAdm_cE_B, tos11LAdm_cE_C),...s3TO2,}},
    {id: "tos15LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos15LAdm_cE_A, tos15LAdm_cE_B, tos15LAdm_cE_C),...s3TO2,}},
    {id: "tos19LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos19LAdm_cE_A, tos19LAdm_cE_B, tos19LAdm_cE_C),...s3TO2,}},
    {id: "tos23LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos23LAdm_cE_A, tos23LAdm_cE_B, tos23LAdm_cE_C),...s3TO2,}},
    {id: "tos27LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos27LAdm_cE_A, tos27LAdm_cE_B, tos27LAdm_cE_C),...s3TO2,}},
    {id: "tos31LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos31LAdm_cE_A, tos31LAdm_cE_B, tos31LAdm_cE_C),...s3TO2,}},
// ********* tos2LAdm: Tiempo Ordinario, Semana 2 Laudes DOMINGO *********
// ********* TOS4LADM: Tiempo Ordinario, Semana 4,8,12,16,20,24,28,32 Laudes DOMINGO *********
/*  TIEMPO ORDINARIO | DOMINGO DE LA SEMANA II, VI, X, XIV, XVIII, XXII, XXVI, XXX De la Feria. Salterio II    */
    {id: "tos4LAdm",  ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos4LAdm_cE_A,  tos3LAdm_cE_B,  tos4LAdm_cE_C),...s3TO2,}},
    {id: "tos8LAdm",  ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos8LAdm_cE_A,  tos7LAdm_cE_B,  tos8LAdm_cE_C),...s3TO2,}},
    {id: "tos12LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos12LAdm_cE_A, tos11LAdm_cE_B, tos12LAdm_cE_C),...s3TO2,}},
    {id: "tos16LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos16LAdm_cE_A, tos15LAdm_cE_B, tos16LAdm_cE_C),...s3TO2,}},
    {id: "tos20LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos20LAdm_cE_A, tos19LAdm_cE_B, tos20LAdm_cE_C),...s3TO2,}},
    {id: "tos24LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos24LAdm_cE_A, tos23LAdm_cE_B, tos24LAdm_cE_C),...s3TO2,}},
    {id: "tos28LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos28LAdm_cE_A, tos27LAdm_cE_B, tos28LAdm_cE_C),...s3TO2,}},
    {id: "tos32LAdm", ...s3TO1,cEvan_Conclusion: {cEvangelicoAnt:   window.antifonaDomingo(tos32LAdm_cE_A, tos31LAdm_cE_B, tos32LAdm_cE_C),...s3TO2,}},
// ********* tos2LAdm: Tiempo Ordinario, Semana 2 Laudes DOMINGO *********

    /****************************************************************************************
    ******************************************** LUNES **************************************
    ****************************************************************************************/
   // Tiempo Ordinario, Semana 1,5,9,13,21,25,29,33 LAUDES LUNES *********
    {id: "tos1LAln",  ...s1TOln1,},
    {id: "tos5LAln",  ...s1TOln1,},
    {id: "tos9LAln",  ...s1TOln1,},
    {id: "tos13LAln", ...s1TOln1,},
    {id: "tos17LAln", ...s1TOln1,},
    {id: "tos21LAln", ...s1TOln1,},
    {id: "tos25LAln", ...s1TOln1,},
    {id: "tos29LAln", ...s1TOln1,},
    {id: "tos33LAln", ...s1TOln1,},
    // ********* tos2LAdm: Tiempo Ordinario, Semana 1,5,9,13,21,25,29,33 Laudes DOMINGO *********
    
    // Tiempo Ordinario, Semana 2,6,10,14,18,22,26,30 LAUDES LUNES *********
    {id: "tos2LAln",  ...s2TOln1,},
    {id: "tos6LAln",  ...s2TOln1,},
    {id: "tos10LAln", ...s2TOln1,},
    {id: "tos14LAln", ...s2TOln1,},
    {id: "tos18LAln", ...s2TOln1,},
    {id: "tos22LAln", ...s2TOln1,},
    {id: "tos26LAln", ...s2TOln1,},
    {id: "tos30LAln", ...s2TOln1,},

    // Tiempo Ordinario, Semana 3,7,11,15,19,23,27,31 LAUDES LUNES *********
    {id: "tos3LAln",  ...s3TOln1,},
    {id: "tos7LAln",  ...s3TOln1,},
    {id: "tos11LAln", ...s3TOln1,},
    {id: "tos15LAln", ...s3TOln1,},
    {id: "tos19LAln", ...s3TOln1,},
    {id: "tos23LAln", ...s3TOln1,},
    {id: "tos27LAln", ...s3TOln1,},
    {id: "tos31LAln", ...s3TOln1,},

        // Tiempo Ordinario, Semana 4,8,12,16,20,24,28,32 LAUDES LUNES *********
    {id: "tos4LAln",  ...s4TOln1,},
    {id: "tos8LAln",  ...s4TOln1,},
    {id: "tos12LAln", ...s4TOln1,},
    {id: "tos16LAln", ...s4TOln1,},
    {id: "tos20LAln", ...s4TOln1,},
    {id: "tos24LAln", ...s4TOln1,},
    {id: "tos28LAln", ...s4TOln1,},
    {id: "tos32LAln", ...s4TOln1,},
    /****************************************************************************************
    ******************************************** LUNES **************************************
    ****************************************************************************************/


/*  TIEMPO ORDINARIO
    DOMINGO DE LA SEMANA III
    De la Feria. Salterio III    */

// ********* tps1js: Tiempo Pascual, Semana 1 Jueves Oficio de Lectura*********
    {        id:                            "tos3LAdm",
             tt:                            "LAUDES",
            sub:                            "(Oración de la mañana)",
    invitatorio: {
         titulo:                            "INVITATORIO",
    instruccion:                            instruccion, //(Si Laudes no es la primera oración del día se sigue el esquema del Invitatorio explicado en el Oficio de Lectura)
              v:                            invitatorio1,   // V. Señor abre mis labios
              r:                            invitatorio2,   // R. y mi boca proclamará tu alabanza
        },
        
        antifonaInvitatorio:                tos3LAdmI,

        // datos.salmoInvitatorio.VARIABLE
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
            antifonaInvitatorio:            tos3LAdmI,

            // Antifona de Entrada
            antifonaInvitatorio_Salida:     tos3LAdmI,
            
            // Himno
            himnot:                         htos3LAdmt,
            himno:                          htos3LAdm,
        },

        // Salmodia 1, 2, 3
        Salmodias: {
            Ant1:                           tos3LAdm1,
            SalmoUNOt:                      salmo92t,
            SalmoUNO:                       salmo92,

            Ant2:                           tos3LAdm2,
            SalmoDOSt:                      dn_3_57_88_56t,
            SalmoDOS:                       dn_3_57_88_56,

            Ant3:                           tos3LAdm3,
            SalmoTRESt:                     salmo148t,
            SalmoTRES:                      salmo148,
        },

        //Lectura Breve
        LecturaBreve: {
            LecturaCita:                    tos3LAdm_lbt,
            LecturaTexto:                   tos3LAdm_lb,
            
        //RESPONSORIO BREVE    
            responsorio1:                    tos3LAdm_rb,
            responsorio2:                    tos3LAdm_rb,
            responsorio3:                    tos3LAdm_rb1,
            responsorio4:                    tos3LAdm_rb2,
            gloria:                          gloria,
            responsorio5:                    tos3LAdm_rb,
        },


        //Cantico Evangelico
        cEvan_Conclusion: {
            cEvangelicoAnt:                 window.antifonaDomingo(tos3LAdm_cE_A, tos3LAdm_cE_B, tos3LAdm_cE_C),
            canticoZacariast:               canticoZacariast,
            canticoZacarias:                canticoZacarias,
            
            
        //PRECES
            preces1:                        tos3LAdm_preces1,
            preces2:                        tos3LAdm_preces2,
    
            Padren:                         "Padre nuestro...",
    
            oracion:                        tos3LAdm_oracion,

            Conclusion1:                    Conclusion1,
            Conclusion2:                    Conclusion2,
        },
    },  // ***********************************************************

/*  
TIEMPO ORDINARIO
DOMINGO DE LA SEMANA IV
De la Feria. Salterio IV
*/

// ********* tps1js: Tiempo Pascual, Semana 1 Jueves Oficio de Lectura*********
    {        id:                            "tos4LAdm",
             tt:                            "LAUDES",
            sub:                            "(Oración de la mañana)",
    invitatorio: {
         titulo:                            "INVITATORIO",
    instruccion:                            instruccion, //(Si Laudes no es la primera oración del día se sigue el esquema del Invitatorio explicado en el Oficio de Lectura)
              v:                            invitatorio1,   // V. Señor abre mis labios
              r:                            invitatorio2,   // R. y mi boca proclamará tu alabanza
        },
        
        antifonaInvitatorio:                tos4LAdmI,

        // datos.salmoInvitatorio.VARIABLE
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
            antifonaInvitatorio:            tos4LAdmI,

            // Antifona de Entrada
            antifonaInvitatorio_Salida:     tos4LAdmI,
            
            // Himno
            himnot:                         htos4LAdmt,
            himno:                          htos4LAdm,
        },

        // Salmodia 1, 2, 3
        Salmodias: {
            Ant1:                           tos4LAdm1,
            SalmoUNOt:                      salmo92t,
            SalmoUNO:                       salmo92,

            Ant2:                           tos4LAdm2,
            SalmoDOSt:                      dn_3_57_88_56t,
            SalmoDOS:                       dn_3_57_88_56,

            Ant3:                           tos4LAdm3,
            SalmoTRESt:                     salmo148t,
            SalmoTRES:                      salmo148,
        },

        //Lectura Breve
        LecturaBreve: {
            LecturaCita:                    tos4LAdm_lbt,
            LecturaTexto:                   tos4LAdm_lb,
            
        //RESPONSORIO BREVE    
            responsorio1:                    tos4LAdm_rb,
            responsorio2:                    tos4LAdm_rb,
            responsorio3:                    tos4LAdm_rb1,
            responsorio4:                    tos4LAdm_rb2,
            gloria:                          gloria,
            responsorio5:                    tos4LAdm_rb,
        },


        //Cantico Evangelico
        cEvan_Conclusion: {
            cEvangelicoAnt:                 window.antifonaDomingo(tos4LAdm_cE_A, tos4LAdm_cE_B, tos4LAdm_cE_C),
            canticoZacariast:               canticoZacariast,
            canticoZacarias:                canticoZacarias,
            
            
        //PRECES
            preces1:                        tos4LAdm_preces1,
            preces2:                        tos4LAdm_preces2,
    
            Padren:                         "Padre nuestro...",
    
            oracion:                        tos4LAdm_oracion,

            Conclusion1:                    Conclusion1,
            Conclusion2:                    Conclusion2,
        },
    },  // ***********************************************************

/*  
TIEMPO ORDINARIO
DOMINGO DE LA SEMANA V
De la Feria. Salterio V
*/

// ********* tps1js: Tiempo Pascual, Semana 1 Jueves Oficio de Lectura*********
    {        id:                            "tos5LAdm",
             tt:                            "LAUDES",
            sub:                            "(Oración de la mañana)",
    invitatorio: {
         titulo:                            "INVITATORIO",
    instruccion:                            instruccion, //(Si Laudes no es la primera oración del día se sigue el esquema del Invitatorio explicado en el Oficio de Lectura)
              v:                            invitatorio1,   // V. Señor abre mis labios
              r:                            invitatorio2,   // R. y mi boca proclamará tu alabanza
        },
        
        antifonaInvitatorio:                tos5LAdmI,

        // datos.salmoInvitatorio.VARIABLE
        salmoInvitatorio: {
            titulo:                         salmo94t,
            subtitulo:                      invitacion,
            contentInv:                     salmo94,
            antifonaInvitatorio:            tos5LAdmI,

            // Antifona de Entrada
            antifonaInvitatorio_Salida:     tos5LAdmI,
            
            // Himno
            himnot:                         htos5LAdmt,
            himno:                          htos5LAdm,
        },

        // Salmodia 1, 2, 3
        Salmodias: {
            Ant1:                           tos5LAdm1,
            SalmoUNOt:                      salmo62_2_9t,
            SalmoUNO:                       salmo62_2_9,

            Ant2:                           tos5LAdm2,
            SalmoDOSt:                      dn_3_57_88_56t,
            SalmoDOS:                       dn_3_57_88_56,

            Ant3:                           tos5LAdm3,
            SalmoTRESt:                     salmo149t,
            SalmoTRES:                      salmo149,
        },

        //Lectura Breve
        LecturaBreve: {
            LecturaCita:                    tos5LAdm_lbt,
            LecturaTexto:                   tos5LAdm_lb,
            
        //RESPONSORIO BREVE    
            responsorio1:                    tos5LAdm_rb,
            responsorio2:                    tos5LAdm_rb,
            responsorio3:                    tos5LAdm_rb1,
            responsorio4:                    tos5LAdm_rb2,
            gloria:                          gloria,
            responsorio5:                    tos5LAdm_rb,
        },


        //Cantico Evangelico
        cEvan_Conclusion: {
            cEvangelicoAnt:                 window.antifonaDomingo(tos5LAdm_cE_A, tos5LAdm_cE_B, tos5LAdm_cE_C),
            canticoZacariast:               canticoZacariast,
            canticoZacarias:                canticoZacarias,
            
            
        //PRECES
            preces1:                        tos5LAdm_preces1,
            preces2:                        tos5LAdm_preces2,
    
            Padren:                         "Padre nuestro...",
    
            oracion:                        tos5LAdm_oracion,

            Conclusion1:                    Conclusion1,
            Conclusion2:                    Conclusion2,
        },
    },  // ***********************************************************

    

];