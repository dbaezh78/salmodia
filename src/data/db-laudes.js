export const dbLaudes = [

    // Salterio 1 Semana 1
    {       //datos.Variable
             id: "tps1js",
             tt: "LAUDES",
            sub: "(Oración de la mañana)",
    invitatorio: {
         titulo: "INVITATORIO",
    instruccion: "(Si Laudes no es la primera oración del día se sigue el esquema del Invitatorio explicado en el Oficio de Lectura)",
              v: "Señor abre mis labios",
              r: "Y mi boca proclamará tu alabanza"
        },
        antifonaInvitatorio: inv_tiempo_pacual,

        // datos.salmoInvitatorio.VARIABLE
        salmoInvitatorio: {
            titulo: salmo94t,
            subtitulo: invitacion,
            contentInv: salmo94,
            antifonaInvitatorio: inv_tiempo_pacual,

            antifonaInvitatorio_Salida: inv_tiempo_pacual,

            himnot: hps1jlaudest,
            himno: hps1jlaudes,

        },
        Salmodias: {
            Ant1: ps1ant1,
            SalmoUNOt: salmo62_2_9t,
            SalmoUNO: salmo62_2_9,

            Ant2: ps1ant2,
            SalmoDOSt: dn_3_57_88_56t,
            SalmoDOS: dn_3_57_88_56,

            Ant3: ps1ant3,
            SalmoTRESt: salmo149t,
            SalmoTRES: salmo149,
        },

        LecturaBreve: {
            LecturaCita: lb_rm8_10_11t,
            LecturaTexto: lb_rm8_10_11,
            // datos.VARIABLE
            responsoriobreve: "RESPONSORIO BREVE",
            nota: ps1jlaudes_respt,
            responsorio: ps1jlaudes_resp,
        },
        cEvan_Conclusion: {

            cEvangelicoAnt: tps1js_cEvangelico,
            canticoZacariast: canticoZacariast,
            canticoZacarias: canticoZacarias,
            cEvangelico: tps1js_cEvangelico,
    
            preces1: tps1jslaud_preces1,
            preces2: tps1jslaud_preces2,
    
            Padren: "Padre nuestro...",
    
            oracion: tps1jsLaud_oracion,

            Conclusion1: Conclusion1,
            Conclusion2: Conclusion2,
        },



    }
    // Aquí seguirían salt1s2, salt1s3, etc.
];