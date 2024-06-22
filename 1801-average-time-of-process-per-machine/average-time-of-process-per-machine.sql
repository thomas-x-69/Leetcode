# Write your MySQL query statement below
SELECT 
    act1.machine_id, 
    ROUND(AVG(act2.timestamp-act1.timestamp),3) as processing_time 
FROM Activity as act1
JOIN Activity as act2 ON act2.machine_id=act1.machine_id

where 
    act1.process_id=act2.process_id
    and
    act1.activity_type='start' 
    and 
    act2.activity_type='end'
group by 
    act1.machine_id;
